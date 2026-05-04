import React from 'react'
import { FcIdea } from 'react-icons/fc';

const LearningTips = () => {
  return (
    <div>
      <div className="py-16 bg-linear-to-b from-blue-50 via-white to-blue-200">
        <div className="max-w-6xl mx-auto px-4">
         
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 flex justify-center gap-2">
              <FcIdea /> Learning Tips
            </h2>
            <p className="text-gray-500 mt-2">
              Boost your productivity with smart study habits
            </p>
          </div>

         
          <div className="grid md:grid-cols-2 gap-8">
          
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition border border-gray-100 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                  📚
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Study Techniques
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ Use active recall instead of passive reading</li>
                <li>✔ Teach what you learn to someone else</li>
                <li>✔ Practice past exam questions regularly</li>
                <li>✔ Break topics into small chunks</li>
              </ul>
            </div>

          
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition border border-gray-100 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  ⏰
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Time Management Tips
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ Use Pomodoro technique (25 min study + 5 min break)</li>
                <li>✔ Set daily study goals</li>
                <li>✔ Avoid multitasking while learning</li>
                <li>✔ Study hardest subject first</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningTips