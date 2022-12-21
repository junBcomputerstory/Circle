FROM centos

ENV HOME=/service/server

WORKDIR /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

WORKDIR /var/cache/dnf
RUN rm -rf *

RUN yum update -y
RUN yum install -y npm

RUN mkdir /service
RUN mkdir $HOME

ADD ./server/Circle $HOME/Circle
ADD ./server/config $HOME/config
ADD ./server/User $HOME/User
ADD ./server/index.js $HOME/
ADD ./server/route.js $HOME/
ADD ./package.json $HOME/../

WORKDIR $HOME/../
RUN npm i 