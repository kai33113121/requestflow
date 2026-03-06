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


