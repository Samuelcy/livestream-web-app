## Settings Routes

### GET: /api/settings/channel/
- **Payload:** X
- **Response:** id, username, title, description, avatarUrl, streamKey

### PUT: /api/settings/channel/
- **Payload:** username, description, title, avatarUrl
- **Response:** username, description, title, avatarUrl

### PATCH: /api/settings/password/
- **Payload:** password, newPassword
- **Response:** 200 success message

## Channel Routes

### GET: /api/channel/
- **Payload:** X
- **Response:** id, username, title, avatarUrl, streamKey, isOnline

### GET: /api/channels/:channelId
- **Payload:** X
- **Response:** id, title, username, description, isOnline, streamUrl

### GET: /api/channels/followed
- **Payload:** X
- **Response:** X

### POST: /api/channels/follow
- **Payload:** channelId
- **Response:** 200 with success message
