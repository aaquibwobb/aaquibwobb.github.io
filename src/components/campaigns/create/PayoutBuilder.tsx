import { Grid, InputLabel, TextField, Typography, MenuItem,Box } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { useCallback } from "react";
import { Table } from "react-bootstrap";
import { Payout } from "../../../core";
import { Validators } from "../../../core/validators";
import { CssVariables } from "../../../css-variables";
import { __tr } from "../../../i18n";
import { PayoutType } from "../../../models";

interface PayoutBuilderProps {
  type: PayoutType;
  payout?: Payout;
  onChange(value: Payout): any;
}

interface MileStone {
  milestone:"",
  dueData:"",
  percent:""

}



export function PayoutBuilder(props: PayoutBuilderProps) {
  const [currency, setCurrency] = useState("INR");
  const [amount, setAmount] = useState("0");
  const [barterProductUrl, setBarterProductUrl] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [paymentType, setPaymentType] = useState('');
	const [rows,setRow] = useState([
    {milestone:"",
    dueData:"",
    percent:""}
  ])

  const submitChanges = useCallback(() => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    let parsedAmount = parseFloat(amount);
    if (props.type === PayoutType.BARTER) {
      if (parsedAmount > 0 && currency && barterProductUrl) {
        props.onChange({
          type: PayoutType.BARTER,
          productMRP: {
            amount: parsedAmount || 1,
            currency,
          },
          productUrl: barterProductUrl,
        });
      }
    } else if (props.type === PayoutType.FIXED) {
      if (parsedAmount > 0 && currency) {
        props.onChange({
          type: PayoutType.FIXED,
          cash: {
            amount: parsedAmount || 1,
            currency,
          },
        });
      }
    } else if (props.type === PayoutType.VARIABLE) {
      if (parsedAmount > 0 && currency) {
        props.onChange({
          type: PayoutType.VARIABLE,
          maxCash: {
            amount: parsedAmount || 1,
            currency,
          },
        });
      }
    }
  }, [currency, amount, barterProductUrl, errors, props]);

  const onCurrencyChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let value = ev.currentTarget.value;
      setCurrency(value.toUpperCase());
      submitChanges();
    },
    [submitChanges]
  );

  const onAmountChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let value = ev.currentTarget.value;
      setAmount(value);

      let nextErrs: any = {};
      if (props.type !== PayoutType.BARTER && !Validators.isCashAmount(value)) {
        nextErrs.amount = __tr("errorInvalidAmount");
      } else if (
        props.type === PayoutType.BARTER &&
        !Validators.isBarterAmount(value)
      ) {
        nextErrs.amount = __tr("errorInvalidMRP");
      }
      setErrors(nextErrs);
      submitChanges();
    },
    [submitChanges, props]
  );

  const onBarterProductUrlChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      let value = ev.currentTarget.value;
      setBarterProductUrl(value);

      if (!Validators.isLink(value)) {
        let nextErrs: any = {};
        nextErrs.url = __tr("errorInvalidProductUrl");
        setErrors(nextErrs);
      }
      submitChanges();
    },
    [submitChanges]
  );
 const handleAddRow = () => {
    const item = {
      milestone:"",
      dueData:"",
      percent:""
    };
    setRow(oldArray => [...oldArray,item]);

  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {props.type === PayoutType.VARIABLE && (
        <>
          <Grid item xs={12} md={4}>
            <InputLabel>{__tr("maxCashPayout")}</InputLabel>
          </Grid>
          <Grid item xs={3} md={2}>
            <TextField
              size="small"
              fullWidth
              name="currency"
              variant="outlined"
              onChange={onCurrencyChange}
              value={currency}
              error={errors.currency}
              helperText={errors.currency}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              size="small"
              fullWidth
              type="text"
              name="amount"
              variant="outlined"
              value={amount}
              onChange={onAmountChange}
              error={errors.amount}
              helperText={errors.amount}
            />
          </Grid>
          <Grid item xs={3} md={2}>
            {/* <Typography variant='body2' style={{ color: CssVariables.colorGrayV2 }}>
              /{__tr('influencer')}
            </Typography> */}
          </Grid>
        </>
      )}
      {props.type === PayoutType.FIXED && (
        <>
          <Grid item xs={12} md={4}>
            <InputLabel>{__tr("cashPayout")}</InputLabel>
          </Grid>
          <Grid item xs={3} md={2}>
            <TextField
              size="small"
              fullWidth
              name="currency"
              variant="outlined"
              onChange={onCurrencyChange}
              value={currency}
              error={errors.currency}
              helperText={errors.currency}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              size="small"
              fullWidth
              type="number"
              name="amount"
              variant="outlined"
              value={amount}
              onChange={onAmountChange}
              error={errors.amount}
              helperText={errors.amount}
            />
          </Grid>
          <Grid item xs={3} md={2}>
            {/* <Typography
              variant="body2"
              style={{ color: CssVariables.colorGrayV2 }}
            >
              /{__tr("influencer")}
            </Typography> */}
          </Grid>
        </>
      )}
      {props.type === PayoutType.VARIABLE && (
       
        <>
        {console.log("e",rows)}
          <Grid item xs={12} md={4} >
            <InputLabel>{__tr("paymentType")}</InputLabel>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              size="small"
              fullWidth
              //  name="url"
              select
              variant="outlined"
              value={paymentType}
              placeholder={"e.g. Single Payment"}
              onChange={(ev) => setPaymentType(ev.target.value)}
            //  error={errors.url}
            //  helperText={errors.url}
            >
              <MenuItem value={"single"}>{'Single Payout'}</MenuItem>

              <MenuItem value={"mileStone"}>{'Milestone Payout'}</MenuItem>
            </TextField>
          </Grid>

        </>

      )}
      {
        paymentType == "mileStone" && (
          <>
           
           <Box width='100%' padding={2} style={{borderColor:"#DDDDDD",borderWidth:"1px solid #DDDDDD "}}>
              <Table  style={{backgroundColor:"rgba(221, 221, 221, 0.1);",borderWidth:"0.5",borderColor:"#DDDDDD",width:"100%"}}>
                <thead>
                  <tr>
                    <th>Milestones</th>
                    <th>Due date</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
          {rows.map((item,index)=>
          (
            <tr>
            <Grid item  >
                    <TextField
                      size="small"
                      fullWidth
                      // name="url"
                      placeholder={"MileStone "+(index+1)}
                      variant="outlined"
                      // value={barterProductUrl}
                      onChange={onBarterProductUrlChange}
                      // error={errors.url}
                      // helperText={errors.url}
                    />
                    </Grid>
                    
              <td> <Grid >
                    <TextField
                      size="small"
                      fullWidth
                      name="url"
                      variant="outlined"
                       placeholder={"dd/mm/yyyy"}
                      value={barterProductUrl}
                      onChange={onBarterProductUrlChange}
                      error={errors.url}
                      helperText={errors.url}
                    />
                    </Grid></td>
              <td> <Grid >
                    <TextField
                     size="small"
                      fullWidth
                      name="url"
                      variant="outlined"
                      placeholder={"e.g.20%"}
                      value={barterProductUrl}
                      onChange={onBarterProductUrlChange}
                      error={errors.url}
                      helperText={errors.url}
                    />
                    </Grid></td>
            </tr>
          ))}
  
    </tbody>
              </Table>
                <div style={{display:"flex",alignItems:"center"}}>
                <button style={{height:25,width:25,borderRadius:25/2,}}
                onClick={handleAddRow}
                >
                   +
                 </button>
                 <div style={{paddingLeft:10}}>
                 Add Milestone 
                 </div>
                </div>
           </Box>
          </>

        )
      }

      {props.type === PayoutType.BARTER && (
        <>
          <Grid item xs={12} md={4}>
            <InputLabel>{__tr("productMRP")}</InputLabel>
          </Grid>
          <Grid item xs={4} md={2}>
            <TextField
              size="small"
              fullWidth
              name="currency"
              variant="outlined"
              onChange={onCurrencyChange}
              value={currency}
              error={errors.currency}
              helperText={errors.currency}
            />
          </Grid>
          <Grid item xs={8} md={6}>
            <TextField
              size="small"
              fullWidth
              type="number"
              name="amount"
              variant="outlined"
              value={amount}
              onChange={onAmountChange}
              error={errors.amount}
              helperText={errors.amount}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabel>{__tr("productUrl")}</InputLabel>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              size="small"
              fullWidth
              name="url"
              variant="outlined"
              value={barterProductUrl}
              onChange={onBarterProductUrlChange}
              error={errors.url}
              helperText={errors.url}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}


