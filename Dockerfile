FROM nginx:alpine
COPY . /usr/share/nginx/html/
RUN mkdir -p /etc/nginx/ssl
COPY nginx.conf /etc/nginx/nginx.conf
