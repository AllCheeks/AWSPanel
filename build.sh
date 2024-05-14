mkdir tmp

# 设置GOPATH
export GOPATH=~/go
export GOMODCACHE=$GOPATH/pkg/mod

CGO_ENABLED=1 go build
mv Aws-Panel tmp/
cd ./web/
npm install
npm run build
mv dist/ ../tmp/web
cd ../tmp/
mv Aws-Panel ../
mv web ../Aws-Panel
cd ../
rm -rf tmp
