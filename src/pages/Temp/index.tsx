import Toggle from '../../components/Toggle';
import { useCurTheme } from '../../hooks/useCurTheme';
import { darkTheme } from '../../styles/themes/darkTheme';
import { lightTheme } from '../../styles/themes/lightTheme';

export const Temp = () => {
  const { curTheme, setCurTheme } = useCurTheme();
  const themeHandler = (toggleState: boolean) => {
    setCurTheme(() =>
      toggleState
        ? { theme: darkTheme, title: 'dark' }
        : { theme: lightTheme, title: 'light' }
    );
  };

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
          backgroundColor: curTheme.theme.palette.background['100'],
        }}
      />
    </div>
  );
};
