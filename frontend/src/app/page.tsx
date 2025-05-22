import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            CollabSphere
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            A powerful AI-powered community chat platform that brings people together through meaningful discussions, real-time collaboration, and intelligent features.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/chat"
                                className="btn-primary"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need for community collaboration
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        name: 'Real-time Chat',
        description: 'Engage in seamless text and voice conversations with your community members in real-time.',
    },
    {
        name: 'AI-Powered Features',
        description: 'Leverage GPT-4 for intelligent discussion summaries, content moderation, and quiz generation.',
    },
    {
        name: 'Community Management',
        description: 'Create and manage groups, moderate discussions, and build thriving communities.',
    },
] 