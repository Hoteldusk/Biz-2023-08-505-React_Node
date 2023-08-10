# NodeJs + Express \_ MySQL + Sequelize 연동 프로젝트

- 프로젝트 생성 : `npx express-21c myproject -s` (주의!! 반드시 -s 포함)
- DB Model 생성하기 위하여

1. sequelize-auto 설치 : `npm install -g sequelize-auto`
2. mysql2 엔진 설치 : `npm install -g mysql2`
3. 터미널에서 `sequelize-auto` 실행하여 화면이 나타나는지 확인

## sequelize를 사용하여 기존 DB에서 Model 추출하기

- model 정보를 저장할 임시 폴더 생성 : `db_make` 폴더 생성
  만약 터미널에서 생성한다면 `mkdir db_make` 명령으로 실행하여 생성
- DB model 추출 명령 실행(db_make 폴더에서 실행)
  `sequelize-auto -h localhost -d imageDB -u root -x '!Biz8080'`

## sequelize model 파일 편집

- 생성된 model 파일이 ES5 이전 방식으로 만들어진 파일이기 때문에 ES5+ 버전으로 수동 변환 해야 한다.

```js
// 기존 코드
const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {};

// 변경 후 코드
import Sequelize from "sequelize";
export default (sequelize) => {};
```

- column 설정 부분 코드 변경

```js
// 기존 코드의 DataTypes
return sequelize.define("tbl_bbs", {
  b_seq: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
});
// 변경 후 코드(DataTypes 앞에 Sequelize. 추가)
return sequelize.define("tbl_bbs", {
  b_seq: {
    autoIncrement: true,
    type: Sequelize.DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
});
```

- 변경된 model 들을 init-models에 등록하기

```js
// model 파일 import
import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";

// initModels 함수에 모델 설정 코드 추가
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  // 다른 곳에서 model을 사용할 수 잇또록 export 준비
  return {
    tbl_bbs,
    tbl_files,
  };
};
```

## 기타 설정

- `app.js`에서 DB.sequelize.sync() 함수 점검
- 서버 start, table 삭제 후 서버 restart 하여 table 생성하기

## Client JS 에서 FormData 에 담긴 body 데이터 받기

- JS 에서 FormData 에 Text, Image 등을 append 하여 서버로 보내면 기본 설정에서는 이 데이터를 수신하지 못한다
- FormData 를 수신하기 위하여 middle ware 를 설치한다. : `npm install multer`
- app.js 에 multer 설정

```js
import multer form "multer";


app.set("view engine", "pug");
// express 에 multer middle ware 설치
app.use(multer().array());
// middleWare enable
app.use(logger("dev"));
```
