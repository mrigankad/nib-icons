Set-Location -LiteralPath "C:\Users\mriga_ijtdono\Documents\Nib Icons\packages\react"
Write-Host "Publishing @mrigankad/nib-icons-react 1.3.2 ..." -ForegroundColor Cyan
npm publish --access public --loglevel=warn
Write-Host "Done. You can close this window." -ForegroundColor Green
