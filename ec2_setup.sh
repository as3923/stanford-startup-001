#!/bin/bash

#add nodejs PPA
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update

#install required tools
sudo apt-get install -y emacs python-software-properties python g++ make vim git nodejs openssh-server openssh-client

#install and login to heroku
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku login

# Sets the default name for git to use when you commit
git config --global user.name "Your Name Here"

# Sets the default email for git to use when you commit
git config --global user.email "your_email@example.com"
