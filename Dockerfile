# Usa a imagem oficial do Nginx
FROM nginx:latest

# Copia os arquivos da pasta 'src' para a pasta padrão do Nginx
COPY src /usr/share/nginx/html

# Copia o arquivo nginx.config para a pasta do nginx.config
COPY nginx.config /etc/nginx/nginx.config

# Expõe a porta padrão do Nginx
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
