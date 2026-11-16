$root = "C:\Users\mriga_ijtdono\Documents\Nib Icons"
Write-Host "Publishing @mrigankad/nib-icons ..." -ForegroundColor Cyan
Set-Location -LiteralPath $root
npm publish --access public --loglevel=warn
Write-Host ""
Write-Host "Publishing @mrigankad/nib-icons-react ..." -ForegroundColor Cyan
Set-Location -LiteralPath (Join-Path $root "packages\react")
npm publish --access public --loglevel=warn
Write-Host ""
Write-Host "Done. You can close this window." -ForegroundColor Green
