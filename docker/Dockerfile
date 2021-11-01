FROM ubuntu:20.04

COPY src /var/www/site

ENV DEBIAN_FRONTEND=noninteract
RUN apt update && apt dist-upgrade -y

RUN apt install -y vim apache2 cron
RUN a2enmod rewrite

EXPOSE 80

# Manually set the apache environment variables in order to get apache to work immediately.
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_RUN_DIR=/var/run/apache2

# Apache env vars
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2/apache2.pid

# Add the startup script to the container
ADD docker/startup.sh /root/startup.sh

# Apache sites
ADD docker/apache-config.conf /etc/apache2/sites-enabled/000-default.conf

# Add source
COPY --chown=www-data src /var/www/site

WORKDIR /var/www/site

CMD ["/bin/bash", "/root/startup.sh"]
