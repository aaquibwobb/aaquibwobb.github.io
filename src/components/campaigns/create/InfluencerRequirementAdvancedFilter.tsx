import { Box, InputLabel, MenuItem, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { StyledSlider } from '../../ui/StyledSlider';
import { InfluencerRequirements } from '../../../core';
import { __tr } from '../../../i18n';
import { Gender } from '../../../models';

interface Props {
  requirements?: InfluencerRequirements;
  onChange(value: InfluencerRequirements): any;
}

export function InfluencerRequirementAdvancedFilter(props: Props) {
  const [ageRange, setAgeRange] = useState([
    props.requirements?.age.from || 18,
    props.requirements?.age.to || 35,
  ]);
  const [country, setCountry] = useState(props.requirements?.country || '');
  const [city, setCity] = useState(props.requirements?.city || '');
  const [gender, setGender] = useState(props.requirements?.gender || Gender.MALE);
  const [language, setLanguage] = useState(props.requirements?.language || '');

  const { onChange } = props;

  useEffect(() => {
    let filter: InfluencerRequirements = {
      age: {
        from: ageRange[0],
        to: ageRange[1],
      },
      country,
      city,
      gender,
      language,
    };
    onChange(filter);
  }, [onChange, country, ageRange, city, gender, language]);

  return (
    <Box width='100%' padding={2}>
      <Box marginY={0.5}>
        <InputLabel>{__tr('gender')}</InputLabel>
      </Box>
      <Box marginY={1}>
        <TextField
          value={gender}
          onChange={(ev) => setGender(ev.target.value as Gender)}
          select
          size='small'
          placeholder={__tr('gender')}
          fullWidth
          variant='outlined'
        >
          <MenuItem value={Gender.MALE}>{__tr('male')}</MenuItem>
          <MenuItem value={Gender.FEMALE}>{__tr('female')}</MenuItem>
          <MenuItem value={Gender.OTHERS}>{__tr('others')}</MenuItem>
        </TextField>
      </Box>
      <Box marginY={0.5}>
        <InputLabel>{__tr('age')}</InputLabel>
      </Box>
      <Box marginY={1} marginX={2}>
        <StyledSlider
          min={18}
          value={ageRange}
          valueLabelDisplay='auto'
          onChange={(ev, val) => setAgeRange(val as number[])}
          max={100}
        />
      </Box>
      <Box marginY={0.5}>
        <InputLabel>{__tr('country')}</InputLabel>
      </Box>
      <Box marginY={1}>
        <TextField
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
          select
          fullWidth
          size='small'
          variant='outlined'
          placeholder={__tr('country')}
        >
          <MenuItem value='IND'>India</MenuItem>
          <MenuItem value='PAK'>Pakistan</MenuItem>
          <MenuItem value='USA'>United States</MenuItem>
        </TextField>
      </Box>
      <Box marginY={0.5}>
        <InputLabel>{__tr('city')}</InputLabel>
      </Box>
      <Box marginY={1}>
        <TextField
          fullWidth
          size='small'
          variant='outlined'
          placeholder={__tr('city')}
          value={city}
          onChange={(ev) => setCity(ev.target.value)}
        />
      </Box>
      <Box marginY={0.5}>
        <InputLabel>{__tr('language')}</InputLabel>
      </Box>
      <Box marginY={1}>
        <TextField
          select
          fullWidth
          size='small'
          variant='outlined'
          placeholder={__tr('language')}
          value={language}
          onChange={(ev) => setLanguage(ev.target.value)}
        >
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
        </TextField>
      </Box>
      <Box marginY={0.5} style={{marginTop:20}}>
        <InputLabel>{"Do you want to filter influencers based on their demographics? (optional)"}</InputLabel>
      </Box>
       <Box style={{width:"100%",borderWidth:1,borderColor:"InactiveBorder",marginTop:20}}>
       <TextField
          fullWidth
          size='small'
          variant='outlined'
          placeholder={"Do you want to ask questions to influencers? (optional)"}
          // value={city}
          // onChange={(ev) => setCity(ev.target.value)}
        />
       </Box>
    </Box>
  );
}
