# from https://www.youtube.com/watch?v=OWAqilIVNgE
# install nginx, certbot, certbot-nginx

# Go to etc/nginx/nginx.conf find http block and make sure it has
include /etc/nginx/sites-enabled/*;

# mkdir /etc/nginx/sites-enabled (if not exists)
# move hestia.confg to /etc/nginx/site-enabled
# move protect to /etc/nginx
# move build folder to /var/www/l2hestia
# systemctl reload nginx

sudo certbot --nginx
# complete steps

# enable nginx on boot
sudo systemctl enable nginx

#install cronie (for manjaro or other)
crontab -e
# add this line to your crontab
1 1 1 * * certbot renew

# enable cronie on boot
sudo systemctl enable cronie.service