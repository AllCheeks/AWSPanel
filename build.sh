#!/bin/sh

# 设置临时目录路径
TMP_DIR=$(mktemp -d)

# 设置环境变量
export HOME=/root
export GOCACHE=$HOME/.cache/go-build
export GOPATH=$HOME/go
export GOMODCACHE=$GOPATH/pkg/mod

mkdir -p $GOCACHE
mkdir -p $GOPATH
mkdir -p $GOMODCACHE

# 构建项目
CGO_ENABLED=1 go build
mv Aws-Panel $TMP_DIR/
cd ./web/
npm install
npm run build
mv dist/ $TMP_DIR/web
cd $TMP_DIR/
mv Aws-Panel ../
mv web ../Aws-Panel
cd ../
rm -rf $TMP_DIR
