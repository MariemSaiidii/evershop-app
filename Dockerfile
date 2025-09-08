FROM node:18-alpine
WORKDIR /app
RUN npm install -g npm@9
COPY package*.json .
COPY themes ./themes
COPY extensions ./extensions
COPY config ./config
COPY media ./media
COPY public ./public
RUN rm -rf node_modules .evershop
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]