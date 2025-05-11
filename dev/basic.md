## Softwares para começar
**Em construção**

- ##### VSCode
  Via Microsoft Store. [Veja aqui](../vscode/extensions-vscode.md) extensões de alta produtividade.
  Via powershell `winget install --id Microsoft.VisualStudioCode -e`

- ##### NodeJS/Npm
  Via powershell `winget install --id OpenJS.NodeJS -e`
  Teste `node -v` `npm -v`

- ##### NVS

- ##### Java (JDK da OpenJDK mantido pela Microsoft)

- ##### WampServer
  Antes, instalar o Microsoft Visual C++ e pacotes relacionados.
  Baixar o instalador do WampServer (verifique a versão desejada no site oficial) `Invoke-WebRequest -Uri "https://sourceforge.net/projects/wampserver/files/WampServer%203/WampServer%203.3.0/wampserver3.3.0_x64.exe/download" -OutFile "wampserver-installer.exe"`

  Iniciar o instalador `Start-Process ".\wampserver-installer.exe"`

- ##### MySQL
  Instalados: Server, Workbench, Shell, Router, Documentation, Samples & Examples.
  Via powershell `winget install -e --id Oracle.MySQL`

- ##### Git (Git Bash, Git GUI, suporte SSH)
  Via powershell `winget install --id Git.Git -e`
  Teste: `git --version`
  Via powershell `git config --global user.name "Seu Nome"`
  Via powershell `git config --global user.email "seu@email.com"`


#### Testes
- ##### Postman
  Via powershell `winget install --id Postman.Postman -e`