#!/bin/bash
set -e

echo "Installing setuptools for Python 3.12 compatibility..."
python3 -m pip install --user setuptools 2>&1 || true

echo "Building web app..."
MODE=production yarn build:web

