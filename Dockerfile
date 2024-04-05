# Use the Cypress included image as base
FROM cypress/included:13.6.6


# # Install Chromium
# RUN apt-get update && apt-get install -y \
#     chromium \
#     chromium-driver \
#     --no-install-recommends \
#     && rm -rf /var/lib/apt/lists/*


WORKDIR /tests

COPY . .

RUN npm i

CMD ["npm", "run","cypress", "test-and-report","--reporter", "mochawesome"]