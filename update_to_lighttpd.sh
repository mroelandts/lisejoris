#!/usr/bin/env bash

# check if lighttpd is installed
[ ! -f "/etc/lighttpd/lighttpd.conf" ] && echo "Error: Lighttpd not installed?" && exit 1
[ ! -d "/var/www/html" ] && echo "Error: there is no '/var/www/html'?" && exit 1

# clear lighttpd folder?
# TODO backup other files
sudo rm -r /var/www/html/*

# copy all files in folder to lighttpd folder
PWD="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
sudo cp -vr $PWD/* /var/www/html/

# set correct ownership of files
sudo chown www-data:www-data /var/www/html -R

exit 0

