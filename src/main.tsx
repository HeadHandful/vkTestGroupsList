import {AdaptivityProvider, ConfigProvider} from '@vkontakte/vkui';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import './index.css';
import '@vkontakte/vkui/dist/vkui.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);
