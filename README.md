
# Dev

1. Clonar el .env.template y crear el .env
2. Si queremos una base de datos de prueba en postgres Ejecutar  el comando ```docker compose up -d```
3. Para migrar los modelos a la base de datos -> prisma migrate dev --name init
4. Si la base de datos ya esta entonces ejecutar el comando npx prisma db pull