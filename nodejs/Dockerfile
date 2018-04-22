FROM mhart/alpine-node:8

ENV PATH /root/.yarn/bin:$PATH

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN apk update \ 
  && apk upgrade \
  && apk add --no-cache git \
  && apk add curl bash binutils tar \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && touch ~/.bashrc \
  && curl -o- -L https://yarnpkg.com/install.sh | bash \
  && apk del git curl tar binutils

ONBUILD COPY . /usr/src/app/
ONBUILD RUN yarn

# Build app
# ONBUILD RUN npm run build

# ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]