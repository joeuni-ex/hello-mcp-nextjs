import { LoginForm } from '@/components/forms/login-form'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            계정에 로그인
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            또는{' '}
            <a
              href="/register"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              새 계정 만들기
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}