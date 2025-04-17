#!/bin/bash

if [ -z "$BUILDING_NAME" ]; then
    echo "BUILDING_NAME environment variable not set, defaulting to empty string"
    BUILDING_NAME=""
fi

sed -i "s#\"%%BUILDING_NAME%%\"#\"$BUILDING_NAME\"#g" index.html

echo "Attempted injection of BUILDING_NAME='$BUILDING_NAME' into index.html using multi-step sed"


