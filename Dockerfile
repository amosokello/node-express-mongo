FROM node:16.15.0

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app
COPY package*.json ./
RUN npm install

# RUN npm install pm2 -g
# RUN npm run build
# COPY ./dist .

COPY . .

EXPOSE 3000

CMD ["npm", "run", "postinstall"]

# EXPOSE 4000

# CMD ["pm2-runtime","app.js"]