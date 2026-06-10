# 랜딩페이지 제작 gig — 포트폴리오 & 영업 키트

크몽/Fiverr "전환형 랜딩페이지 제작" gig을 위한 포트폴리오 샘플 + 재사용 디자인킷 + gig 상세페이지 카피.

## 구성
- `assets/kit.css` — 재사용 디자인 시스템(스타터킷). 페이지마다 `:root` 변수만 바꿔 브랜드 교체.
- `samples/index.html` — **포트폴리오 인덱스(gig에 넣을 링크).** 3종 샘플로 연결.
- `samples/clinic.html` / `academy.html` / `saas.html` — 업종별 샘플(피부과·학원·B2B EN).
- `gig/kmong.md` / `gig/fiverr.md` — gig 상세페이지·패키지·가격 복붙용.

## 무료로 공개 URL 만들기 (GitHub Pages)
1. 이 폴더를 GitHub 새 레포로 push.
2. 레포 → Settings → Pages → Source: `main` 브랜치 `/ (root)` → Save.
3. 몇 분 뒤 `https://<계정>.github.io/<레포>/samples/` 가 포트폴리오 URL.
4. 그 URL을 `gig/kmong.md`·`fiverr.md`의 `[포트폴리오 URL]`, `samples/index.html`의 `[크몽 gig URL]`/`[Fiverr URL]`에 채우기.

## 새 의뢰 들어오면 (납품 흐름)
1. `samples/`의 가장 가까운 업종 파일을 복사 → 클라이언트 정보로 텍스트·`:root` 색상 교체.
2. 폼/애널리틱스 연동 → 호스팅 업로드 or 코드 전달.
3. → 납품한 결과물은 다시 익명화해 포트폴리오에 추가(자산 누적).

## 역할
- **나(사용자)**: 크몽/Fiverr 계정·게시, 의뢰 응대·납품·CS, 가격 결정, 입금(개인사업자).
- **Claude**: 샘플/스타터킷/카피 제작, 의뢰별 커스터마이즈 보조, 니치 리서치.
