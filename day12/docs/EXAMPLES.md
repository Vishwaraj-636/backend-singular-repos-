Example curl requests

Register

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","email":"alice@example.com","password":"secret"}'
```

Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","password":"secret"}'
```

Create post (multipart)

```bash
curl -X POST http://localhost:3000/api/posts/ \
  -H "Authorization: Bearer <TOKEN>" \
  -F "image=@./photo.jpg" \
  -F "text=Hello world"
```

Follow user

```bash
curl -X POST http://localhost:3000/api/user/follow/bob \
  -H "Authorization: Bearer <TOKEN>"
```
