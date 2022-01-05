import { Box } from '@material-ui/core';
import { CognitoUser } from 'amazon-cognito-identity-js';
import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Loader } from '../ui/Loader';
import { SingleLineInput } from '../ui/SingleLineInput';
import { useUrlQuery } from '../../core/hooks';
import { Validators } from '../../core/validators';
import { __tr } from '../../i18n';
import { Routes } from '../../routes';
import { IAppState } from '../../state';
import { initializeState } from '../../state/middlewares';
import { Auth } from 'aws-amplify';

import styles from '../../styles/Login.module.scss';

const mapState = (state: IAppState) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatch = (dispatch: ThunkDispatch<IAppState, {}, AnyAction>) => {
  return {
    initialize: () => dispatch(initializeState()),
  };
};

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

function Login(props: Props) {
  const [loading, setLoading] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [errors, setErrors] = useState<any>({});

  const history = useHistory();
  const nextSegment = useUrlQuery('next', '');
  const isCreatePassword = useUrlQuery('new', '');
  const urlParamsEmail = useUrlQuery('email', '');
  const urlParamsPhone = useUrlQuery('phone', '');

  //setting user email/phone in state -manish
  useEffect(() => {
    if (urlParamsEmail || urlParamsPhone) {
      setEmailOrPhone(urlParamsEmail || urlParamsPhone);
    }
  }, [urlParamsEmail, urlParamsPhone]);

  console.log(emailOrPhone);

  const onSubmit = useCallback(
    async (ev: React.ChangeEvent<HTMLFormElement>) => {
      ev.preventDefault();

      let form = ev.currentTarget;
      let data = {
        emailOrPhone,
        password: form.password.value,
      };

      let errs: any = {};
      if (!Validators.isEmailOrPhone(data.emailOrPhone)) {
        errs.emailOrPhone = __tr('errorInvalidEmailOrPhone');
      }

      if (!data.password) {
        errs.password = __tr('errorInvalidPassword');
      }

      setErrors(errs);

      if (Object.keys(errs).length > 0) {
        return;
      }

      setLoading(true);
      Auth.signIn(emailOrPhone, data.password)
        .then((user: CognitoUser) => {
          setLoading(false);
          props.initialize().then((done) => {
            if (done) {
              if (nextSegment) {
                let next = decodeURIComponent(nextSegment);
                return history.replace(next);
              }
              return history.replace(Routes.Home);
            }
          });
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
    },
    [emailOrPhone, history, nextSegment, props]
  );

  useEffect(() => {
    if (props.user) {
      history.replace(Routes.BaseCampaigns);
    }
  }, [history, props]);

  return (
    <div className={styles.loginWrapper}>
      <h2>Welcome back !</h2>
      <div className={styles.formWrapper}>
        <h3>Password</h3>
        <form action='' className={styles.form} onSubmit={onSubmit}>
          {loading && <Loader />}
          <Box marginY={1} marginTop={4}>
            <SingleLineInput
              label={`${isCreatePassword ? 'Create' : 'Enter'} Password`}
              type='password'
              name='password'
              placeholder='Must be at least 6 characters'
              error={errors.password}
            />
          </Box>
          <Box marginY={0}>
            <Link to={Routes.ForgotPassword} className={styles.passwordRecoveryLink}>
              Forgot Password ?
            </Link>
          </Box>
          <Box marginY={2} marginTop={5}>
            <button type='submit' className={styles.btnSubmit}>
              Sign In
            </button>
          </Box>
          <div className={styles.btnBack}>
            <Link to={Routes.Login} className={`${styles.signupLink}`}>
              {__tr('back')}
            </Link>
          </div>
          {/* <Box marginY={4} display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
            <div className={styles.lined}>
              <div className={styles.text}>Or</div>
            </div>
          </Box>
          <Box marginY={1}>
            <button type='button' className={styles.googleSignin}>
              <span className={styles.icon}>
                <IconGoogle size={24} />
              </span>
              <span className={styles.text}>Continue with Google</span>
            </button>
          </Box>
          <Box marginY={1}>
            <button type='button' className={styles.googleSignin}>
              <span className={styles.icon}>
                <IconFacebook size={24} />
              </span>
              <span className={styles.text}>Continue with Facebook</span>
            </button>
          </Box>
          <Box marginY={2} display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
            <span className={styles.callToSignup}>New to Wobb ?</span>
            <Link to={Routes.Signup} className={styles.signupLink}>
              Sign up
            </Link>
          </Box> */}
        </form>
      </div>
    </div>
  );
}

export default connect(mapState, mapDispatch)(Login);
