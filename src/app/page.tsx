import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hello MCP Next.js
          </h1>
          <p className="text-xl text-gray-600">
            깔끔한 아키텍처로 구성된 Next.js 프로젝트입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>🚀 빠른 개발</CardTitle>
              <CardDescription>
                Next.js 14와 TypeScript로 빠르고 안전한 개발
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                App Router, Server Components, 그리고 최신 React 기능들을 활용하여
                현대적인 웹 애플리케이션을 구축하세요.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 깔끔한 디자인</CardTitle>
              <CardDescription>
                Tailwind CSS로 일관된 디자인 시스템
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                커스텀 컴포넌트와 Tailwind CSS를 조합하여
                아름답고 반응형인 UI를 만들어보세요.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🏗️ 확장 가능한 구조</CardTitle>
              <CardDescription>
                체계적인 폴더 구조와 모듈화된 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                재사용 가능한 컴포넌트와 명확한 폴더 구조로
                유지보수가 쉬운 코드베이스를 구축하세요.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="mr-4">
            시작하기
          </Button>
          <Button variant="outline" size="lg">
            문서 보기
          </Button>
        </div>
      </div>
    </div>
  )
}