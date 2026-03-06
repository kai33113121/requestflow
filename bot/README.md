# RequestFlow Bot

Bot de automatización para monitorear solicitudes en CRM y notificar automáticamente en WhatsApp cuando se crea una nueva solicitud.

Este bot consulta la base de datos del CRM periódicamente y envía la información relevante al grupo de implementación.

---

# Funcionalidades

- Monitoreo automático de nuevas solicitudes
- Lectura de registros desde MySQL
- Interpretación de `structure_answer` (JSON dinámico)
- Envío automático de mensajes a WhatsApp
- Extracción automática de:
  - Radicado
  - Campaña
  - Tipo de solicitud
  - Subtipo de solicitud
  - Nombre del solicitante
  - Correo
  - Teléfono
- Sistema de control de estado para evitar duplicados
- Reconexión automática del bot si WhatsApp se desconecta

---

# Estructura del proyecto

Archivos importantes:

### bot.js
Archivo principal del bot.

Se encarga de:
- conectar con WhatsApp
- consultar nuevas solicitudes
- enviar los mensajes al grupo.

### crm_reader.js
Encargado de:

- conectarse a MySQL
- leer nuevas solicitudes
- interpretar el JSON `structure_answer`

### state.js

Controla el archivo:




Archivos importantes:

### bot.js
Archivo principal del bot.

Se encarga de:
- conectar con WhatsApp
- consultar nuevas solicitudes
- enviar los mensajes al grupo.

### crm_reader.js
Encargado de:

- conectarse a MySQL
- leer nuevas solicitudes
- interpretar el JSON `structure_answer`

### state.js

Controla el archivo:

Este archivo guarda el último ID procesado para evitar enviar solicitudes repetidas.

---

# Requisitos

- Node.js 18+
- MySQL accesible
- Cuenta de WhatsApp

---

# Instalación

Clonar el repositorio:

Este archivo guarda el último ID procesado para evitar enviar solicitudes repetidas.

---

# Requisitos

- Node.js 18+
- MySQL accesible
- Cuenta de WhatsApp

---

# Instalación

Clonar el repositorio:
git clone https://github.com/kai33113121/requestflow.git

Entrar al proyecto, cd requestflow
Instalar dependencias, npm install
#Ejecutar el bot, node bot.js

La primera vez aparecerá un **QR**.

Debes escanearlo con el WhatsApp del número que funcionará como bot.

---

# Funcionamiento

El bot consulta la base de datos cada **10 segundos** buscando nuevas solicitudes.

Cuando detecta una nueva:

1. Lee el registro
2. Interpreta los campos del JSON
3. Construye el mensaje
4. Lo envía al grupo de WhatsApp

Ejemplo de mensaje:

La primera vez aparecerá un **QR**.

Debes escanearlo con el WhatsApp del número que funcionará como bot.

---

# Funcionamiento

El bot consulta la base de datos cada **10 segundos** buscando nuevas solicitudes.

Cuando detecta una nueva:

1. Lee el registro
2. Interpreta los campos del JSON
3. Construye el mensaje
4. Lo envía al grupo de WhatsApp

Ejemplo de mensaje:

La primera vez aparecerá un **QR**.

Debes escanearlo con el WhatsApp del número que funcionará como bot.

---

# Funcionamiento

El bot consulta la base de datos cada **10 segundos** buscando nuevas solicitudes.

Cuando detecta una nueva:

1. Lee el registro
2. Interpreta los campos del JSON
3. Construye el mensaje
4. Lo envía al grupo de WhatsApp

Ejemplo de mensaje:
📨 Nueva solicitud

Radicado: 102433058
Campaña: LAIKA-VENTAS
Tipo: CRM FORMULARIOS
Subtipo: Modificación Formulario

👤 Solicitante: Diego Castro
📧 Correo: diego.castro@groupcosbpo.com

📱 Teléfono: 3202003939


---

# Seguridad

El repositorio **no incluye**:

- credenciales de base de datos
- sesiones de WhatsApp
- archivos de estado

Estos se excluyen mediante `.gitignore`.

---

# Autores

Ángel David Vanegas Bulla  
Lina Mayerly Bohorquez
Desarrollador de software
Colombia