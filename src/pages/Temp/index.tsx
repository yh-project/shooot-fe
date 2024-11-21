import Toggle from '../../components/Toggle';
import { useCurTheme } from '../../hooks/useCurTheme';
import { darkTheme } from '../../styles/darkTheme';
import { lightTheme } from '../../styles/lightTheme';

export const Temp = () => {
  const { curTheme, setCurTheme } = useCurTheme();
  const themeHandler = (toggleState: boolean) =>
    setCurTheme(toggleState ? darkTheme : lightTheme);

  return (
    <div style={{ padding: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '3rem' }}>
        <span>Theme Toggle</span>
        <Toggle handler={themeHandler} />
      </div>
      <div
        style={{
          width: '500px',
          height: '300px',
          marginTop: '3rem',
          backgroundColor: curTheme.palette.background['100'],
        }}
      />
    </div>
  );
};
