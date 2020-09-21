module.exports = {
  presets: [
    "@babel/preset-env" /* converte o JS moderno para JS antigo baseado no ambiente da nossa aplicação (apenas converte o que o browser ou node não entende, por exemplo) 
    há como configurar em qual ambiente ele vai trabalhar -> exemplo Internet Explorer 10 */,
    "@babel/preset-react" /* adiciona as funcionalidades do react na conversão (entender JSX) */,
  ],
};
