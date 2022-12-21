FROM centos

ENV HOME=/client

WORKDIR /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

WORKDIR /var/cache/dnf
RUN rm -rf *

RUN yum update -y
RUN yum install -y npm

RUN mkdir $HOME
WORKDIR $HOME

ADD ./src $HOME/src
ADD ./public $HOME/public
ADD ./package.json $HOME/

RUN npm i --legacy-peer-deps
