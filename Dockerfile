FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /usr/src/app
COPY api/ ./api/
RUN cd api && npm install && npm run build

FROM node:10
WORKDIR /usr/src/app/
COPY --from=ui-build /usr/src/app/frontend/build ./frontend/build
COPY --from=server-build /usr/src/app/api/dist ./
RUN ls

EXPOSE 3080

CMD ["node", "./api.bundle.js"]
