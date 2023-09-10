# NodeJS-Realtime-Chat

**간략한 소개**: Chat Engine은 NodeJS와 ReactJS를 사용하여 실시간 채팅 앱을 구축하기 위한 프로젝트입니다. 사용자 인증, 메시지 송수신, 이미지 및 파일 첨부, 그룹 채팅 등 다양한 기능을 갖춘 앱을 만들 수 있습니다.

## 사용법

1. 프로젝트 클론:

```bash
git clone <프로젝트_레포_URL>
cd <프로젝트_디렉터리>
```
```
cd backend
npm install
npm start
```

2. Chat Engine.io 프로젝트 설정:
  - ChatEngine.io에 가입하고 프로젝트를 생성합니다.
  - 프로젝트 ID와 개인 키를 얻습니다.

3. 프론트앤드 설정
```
 cd frontend
 npm install
```
4. .env.local 파일 생성 (frontend 디렉터리 안):
   ```
   VITE_CHAT_ENGINE_PROJECT_ID=<Chat Engine 프로젝트 ID>
   ```

5. React 앱 실행:
```
npm run dev
```
