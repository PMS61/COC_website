#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo "🚀 Testing GitHub Workflow locally..."

# Test Node setup
echo -n "Testing Node setup... "
if node -v > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    echo "Node.js is not installed"
    exit 1
fi

# Test npm
echo -n "Testing npm... "
if npm -v > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    echo "npm is not installed"
    exit 1
fi

# Test dependencies
echo -n "Testing dependencies installation... "
if npm ci > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    echo "Failed to install dependencies"
    exit 1
fi

# Test build
echo -n "Testing build... "
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    echo "Build failed"
    exit 1
fi

# Test changelog generation
echo -n "Testing changelog generation... "
if npm run changelog > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
else
    echo -e "${RED}✗${NC}"
    echo "Changelog generation failed"
    exit 1
fi

echo -e "\n✨ All tests completed successfully!" 