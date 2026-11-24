// 원본 시안: docs/design/stitch/a_02_admin_courses/code.html
export default function AdminCoursesPage() {
  return (
    <>
      <main className="flex-1 p-xl flex flex-col gap-xl min-w-0">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-display-md-mobile md:text-display-md text-ink">과정 관리</h1>
          <button type="button" className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
            <span>과정 등록</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          {/* 1. 과정 목록 */}
          <section className="lg:col-span-7 bg-surface-1 border border-hairline rounded-xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline bg-canvas">
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">분야</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">과정명</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">공개</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted">기수 수</th>
                  <th className="px-lg py-sm font-caption text-caption text-ink-muted text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline-soft">
                <tr>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted">백엔드</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">백엔드 자바 스프링 부트캠프</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">공개</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">12</td>
                  <td className="px-lg py-md text-right"><button type="button" className="font-caption text-caption text-ink underline whitespace-nowrap">수정</button></td>
                </tr>
                <tr>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted">프론트엔드</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">프론트엔드 React &amp; TS 부트캠프</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">공개</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">9</td>
                  <td className="px-lg py-md text-right"><button type="button" className="font-caption text-caption text-ink underline whitespace-nowrap">수정</button></td>
                </tr>
                <tr>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted">디자인</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">프로덕트 UI/UX 디자인 부트캠프</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted">비공개</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">7</td>
                  <td className="px-lg py-md text-right"><button type="button" className="font-caption text-caption text-ink underline whitespace-nowrap">수정</button></td>
                </tr>
                <tr>
                  <td className="px-lg py-md font-body text-body-sm text-ink-muted">PM</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">IT 프로덕트 매니저 부트캠프</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink">공개</td>
                  <td className="px-lg py-md font-body text-body-sm text-ink tabular-nums">6</td>
                  <td className="px-lg py-md text-right"><button type="button" className="font-caption text-caption text-ink underline whitespace-nowrap">수정</button></td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 2. 과정 등록·수정 폼 */}
          <section className="lg:col-span-5 bg-surface-1 border border-hairline rounded-xl p-lg flex flex-col gap-md">
            <h2 className="font-card text-card-title text-ink">과정 등록 · 수정</h2>
            <form className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label htmlFor="course-name" className="font-body text-body-sm text-ink">과정명 *</label>
                <input id="course-name" type="text" defaultValue="백엔드 자바 스프링 부트캠프" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-10 font-body text-body-sm text-ink focus:border-ink focus:ring-0" />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="course-cat" className="font-body text-body-sm text-ink">분야 *</label>
                <select id="course-cat" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-10 font-body text-body-sm text-ink focus:border-ink focus:ring-0" defaultValue="백엔드">
                  <option>백엔드</option>
                  <option>프론트엔드</option>
                  <option>UI/UX 디자인</option>
                  <option>PM</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="course-summary" className="font-body text-body-sm text-ink">한 줄 소개</label>
                <input id="course-summary" type="text" defaultValue="대용량 트래픽 처리와 MSA 설계까지 실무 아키텍처 완성" className="bg-surface-1 border border-hairline rounded-md px-sm py-sm min-h-10 font-body text-body-sm text-ink focus:border-ink focus:ring-0" />
              </div>
              <div className="flex flex-col gap-xs">
                <label htmlFor="course-desc" className="font-body text-body-sm text-ink">상세 소개</label>
                <textarea id="course-desc" rows={3} className="bg-surface-1 border border-hairline rounded-md p-sm font-body text-body-sm text-ink focus:border-ink focus:ring-0" defaultValue={"Java와 Spring Boot를 기반으로 실무 아키텍처를 학습합니다."} />
              </div>
              <div className="flex flex-col gap-xs">
                <div className="flex items-center justify-between">
                  <span className="font-body text-body-sm text-ink">커리큘럼</span>
                  <button type="button" className="font-caption text-caption text-ink underline">+ 주차 추가</button>
                </div>
                <div className="bg-canvas border border-hairline-soft rounded-md p-sm flex items-center justify-between">
                  <span className="font-caption text-caption text-ink">1~4주차 · Java 핵심과 객체지향 설계</span>
                  <button type="button" className="font-caption text-caption text-ink-muted hover:text-ink">삭제</button>
                </div>
              </div>
              <label className="flex items-center gap-sm cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded-xs border-hairline text-primary focus:ring-primary" />
                <span className="font-body text-body-sm text-ink">과정 공개</span>
              </label>
              <div className="flex items-center gap-sm pt-sm border-t border-hairline-soft">
                <button type="submit" className="flex-1 inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90">
                  <span>저장</span>
                </button>
                <button type="button" className="inline-flex items-center justify-center bg-surface-1 text-ink border border-hairline font-button text-button px-md py-sm min-h-10 rounded-md hover:bg-surface-2">
                  <span>취소</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
