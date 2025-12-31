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
            <a href="#services" class="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#testimonials" class="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
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
              <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Schedule Now
              </button>
              <button class="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 shadow-2xl">
              <div class="bg-white rounded-2xl p-6 shadow-lg">
                <div class="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span class="text-white text-2xl">✨</span>
                    </div>
                    <p class="text-gray-600">Your transformation starts here</p>
                  </div>
                </div>
              </div>
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
            Hi! I'm your personal development coach, living my best life in sunny Tampa with my adorable pup Benjoi. 
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

    <!-- Services Section -->
    <section id="services" class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Coaching Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect coaching package to transform your life and create lasting positive change.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Starter Package -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter Package</h3>
              <div class="text-4xl font-bold text-purple-600 mb-2">$97</div>
              <p class="text-gray-600">Perfect for beginners</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">1:1 Coaching Session (60 min)</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">Personalized Action Plan</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">Email Support (2 weeks)</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">Resource Library Access</span>
              </li>
            </ul>
            <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>
          
          <!-- Transform Package -->
          <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl transform scale-105">
            <div class="text-center mb-8">
              <div class="bg-white/20 rounded-full px-4 py-1 text-white text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Transform Package</h3>
              <div class="text-4xl font-bold text-white mb-2">$297</div>
              <p class="text-purple-100">Complete life transformation</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="text-white mr-3">✓</span>
                <span class="text-white">4 Coaching Sessions (60 min each)</span>
              </li>
              <li class="flex items-center">
                <span class="text-white mr-3">✓</span>
                <span class="text-white">Comprehensive Life Assessment</span>
              </li>
              <li class="flex items-center">
                <span class="text-white mr-3">✓</span>
                <span class="text-white">Weekly Check-ins</span>
              </li>
              <li class="flex items-center">
                <span class="text-white mr-3">✓</span>
                <span class="text-white">Habit Tracking System</span>
              </li>
              <li class="flex items-center">
                <span class="text-white mr-3">✓</span>
                <span class="text-white">Priority Email Support</span>
              </li>
            </ul>
            <button class="w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Transform Now
            </button>
          </div>
          
          <!-- Elite Package -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Elite Package</h3>
              <div class="text-4xl font-bold text-purple-600 mb-2">$597</div>
              <p class="text-gray-600">Ultimate transformation</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">8 Coaching Sessions (60 min each)</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">24/7 WhatsApp Support</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">Custom Meal & Fitness Plans</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">Monthly Group Sessions</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-3">✓</span>
                <span class="text-gray-700">Lifetime Resource Access</span>
              </li>
            </ul>
            <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Go Elite
            </button>
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
    <section id="contact" class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Ready to Transform?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's start your journey to a more fulfilling life. Book a free discovery call to see how we can work together.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span class="text-white">📍</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Location</p>
                    <p class="text-gray-600">Tampa, Florida</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span class="text-white">📧</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Email</p>
                    <p class="text-gray-600">hello@truealchemy.com</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span class="text-white">🐕</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Office Assistant</p>
                    <p class="text-gray-600">Benjoi (the cutest pup ever!)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Book Your Free Call</h3>
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Tell me about your goals and what you'd like to achieve..."></textarea>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8">
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
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-purple-400 transition-colors">1:1 Coaching</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Group Programs</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Habit Building</a></li>
              <li><a href="#" class="hover:text-purple-400 transition-colors">Mindset Work</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#about" class="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#services" class="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#testimonials" class="hover:text-purple-400 transition-colors">Testimonials</a></li>
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
// Component setup for True Alchemy coaching website
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
