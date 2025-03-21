## Tecnologías Utilizadas

- **Backend**:
  - **Laravel 12.2.0** (Composer 2.8.6)
  - **PHP 8.2.12** (XAMPP)
  - **MySQL** (XAMPP)
  - **Apache** (XAMPP)

- **Frontend**:
  - **React 19.0.0** (Node 18.20.4)

---

## Configuración y Puertos

### XAMPP
- **Backend**: 
  - **Puerto**: `8000`
  - **EndPoints disponibles**:
    - **GET** `/api/contacts`
    - **POST** `/api/contacts`

  **Ejemplo de petición POST**:

  ```json
  {
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "message": "Estoy interesado en su servicio"
  }

![image](https://github.com/user-attachments/assets/63784a13-3d23-4e6b-bce9-4d714718dbf9)

---

## Backend (Laravel)

### 1. Instalar dependencias de Composer
Navega a la carpeta del backend y ejecuta el siguiente comando para instalar las dependencias de Laravel:

```
composer install
```

### 2. Configurar el archivo .env
```
cp .env.example .env
```

Edita el archivo .env y agrega la siguiente configuración para conectar con la base de datos:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=examen-tecnico
DB_USERNAME=root
DB_PASSWORD=
```

### 3. Generar la clave de aplicación y migrar la base de datos
```
php artisan key:generate
php artisan migrate
```

### 4. Iniciar el servidor
```
php artisan serve
```

---

## Frontend (React)

### 1. Instalar dependencias de Node

```
npm install
```

### 2. Iniciar el servidor de desarrollo
```
npm run dev
```
