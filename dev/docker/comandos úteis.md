# Docker

## Comandos úteis

Cenário: Docker Desktop não identificava suporte a virtualização [Windows 11]
- `dism /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
- `dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
*Obs: Reiniciar a máquina, docker deve conseguir identificar.