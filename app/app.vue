<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              True Alchemy Coaching
            </h1>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" class="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#testimonials" class="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
            <a href="#podcast" class="text-gray-700 hover:text-purple-600 transition-colors">Podcast</a>
            <a href="#contact" class="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="space-y-4">
              <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Life
                </span>
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed">
                Mind, body, and soul coaching for the modern woman. 
                Discover your true potential and create lasting positive habits.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/melanie_mindsetcoach/30min" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-block text-center">
                Alchemize Now
              </a>
              <a href="https://www.youtube.com/@truealchemycoaching" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Free Videos
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 shadow-2xl">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="w-full h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  <img src="/mel-pfp-main.JPEG" alt="Melanie - True Alchemy Coaching" class="w-full h-full object-cover rounded-xl">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Podcast Section -->
    <section id="podcast" class="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div class="max-w-7xl mx-auto">
        <h2 key="podcast-title-mobile" class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 lg:mb-0 lg:hidden">
          The Best Self Revolution
        </h2>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <a href="https://www.buzzsprout.com/2453285/episodes" target="_blank" rel="noopener noreferrer" class="relative cursor-pointer hover:opacity-90 transition-opacity">
            <div class="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 shadow-2xl">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="w-full rounded-xl overflow-hidden">
                  <img src="/mel-podcast.jpeg" alt="The Best Self Revolution Podcast" class="w-full h-auto object-cover rounded-xl">
                </div>
              </div>
            </div>
          </a>
          <div class="space-y-8">
            <div class="space-y-4">
              <h2 key="podcast-title-desktop" class="hidden lg:block text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                The Best Self Revolution
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed">
                Join me on <strong>The Best Self Revolution</strong>, the podcast dedicated to helping you step into your most powerful, authentic self.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                We dive deep into mindset shifts, self-empowerment, and the tools you need to break free from limitations, reclaim your power, and create the life you truly deserve.
              </p>
              <p class="text-base text-purple-600 font-semibold">
                New episodes drop once a month — subscribe and join the revolution!
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://www.buzzsprout.com/2453285/episodes" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-block text-center">
                Listen Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Meet Your Coach</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Hi! I'm your personal development coach, living my best life in sunny Tampa with my adorable pup Benji. 
            I'm passionate about fashion, wellness, and helping women create their dream lives.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
              <span class="text-white text-2xl">💫</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Mind</h3>
            <p class="text-gray-600">
              Transform your mindset and unlock your full potential through proven techniques and personalized strategies.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
              <span class="text-white text-2xl">💪</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Body</h3>
            <p class="text-gray-600">
              Create sustainable health habits that nourish your body and give you the energy to live your best life.
            </p>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
              <span class="text-white text-2xl">✨</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Soul</h3>
            <p class="text-gray-600">
              Connect with your authentic self and discover your purpose through spiritual practices and self-reflection.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from amazing women who have transformed their lives through True Alchemy coaching.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-semibold">S</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Sarah M.</h4>
                <p class="text-sm text-gray-600">Marketing Executive</p>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "True Alchemy coaching completely changed my perspective on life. I've developed healthy habits that stick and finally feel confident in my own skin!"
            </p>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-semibold">J</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Jessica L.</h4>
                <p class="text-sm text-gray-600">Entrepreneur</p>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "The mind-body-soul approach is exactly what I needed. I've found my purpose and built a business I love while maintaining work-life balance."
            </p>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-semibold">M</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Maria K.</h4>
                <p class="text-sm text-gray-600">Teacher</p>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "I was struggling with burnout and self-care. Now I have sustainable habits that energize me and make me a better teacher and person."
            </p>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Ready to Transform?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let's start your journey to a more fulfilling life. Book a free discovery call to see how we can work together.
          </p>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Ready to UNLOCK your True Potential and Create a Brighter Future. Schedule now
          </p>
          <div>
            <a href="https://calendly.com/melanie_mindsetcoach/30-min-free-consultation" target="_blank" rel="noopener noreferrer" class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              Schedule Now
            </a>
          </div>
        </div>
        
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div class="space-y-4">
              <div class="flex items-center cursor-pointer hover:opacity-80 transition-opacity" @click="copyEmail">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white">📧</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <p class="font-semibold text-gray-900">Email</p>
                    <svg v-if="!emailCopied" class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    <svg v-else class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p id="email-text" class="text-gray-600">truealchemycoaching@gmail.com</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white">🐕</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Office Assistant</p>
                  <p class="text-gray-600">Benji (the cutest pup ever!)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="col-span-2">
            <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              True Alchemy
            </h3>
            <p class="text-gray-400 mb-4">
              Transforming lives through mind, body, and soul coaching. 
              Helping women create lasting positive habits and live their best lives.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a>
              <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">TikTok</a>
              <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">YouTube</a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#about" class="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#testimonials" class="hover:text-purple-400 transition-colors">Testimonials</a></li>
              <li><a href="#podcast" class="hover:text-purple-400 transition-colors">Podcast</a></li>
              <li><a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 True Alchemy. All rights reserved. Made with 💜 in Tampa, FL</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emailCopied = ref(false)

const copyEmail = async () => {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    return
  }
  const email = 'truealchemycoaching@gmail.com'
  try {
    await navigator.clipboard.writeText(email)
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
