# Use the Cypress included image as base
FROM cypress/included:13.6.6

# Install Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Set the browser to use in Cypress
ENV CYPRESS_BROWSER=chromium


WORKDIR /tests

COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress

RUN npm i

ENTRYPOINT ["npx", "cypress", "run"]