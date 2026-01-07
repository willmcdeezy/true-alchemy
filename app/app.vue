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
            <a href="#podcast" class="text-gray-700 hover:text-purple-600 transition-colors">Podcast</a>
            <a href="#testimonials" class="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
            <a href="https://www.youtube.com/@truealchemycoaching" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-purple-600 transition-colors">YouTube</a>
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
              <a href="https://open.spotify.com/show/5FUE5Vxc4DiehEZdWwgg19" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-[#1DB954] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              <a href="https://podcasts.apple.com/us/podcast/the-best-self-revolution/id1805257265" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-16.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm0 5.5c-.827 0-1.5-.673-1.5-1.5S11.173 7.5 12 7.5s1.5.673 1.5 1.5S12.827 11 12 11zm0 2c-2.485 0-4.5 2.015-4.5 4.5 0 .414.336.75.75.75s.75-.336.75-.75c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .414.336.75.75.75s.75-.336.75-.75c0-2.485-2.015-4.5-4.5-4.5z"/>
                </svg>
                Apple Podcast
              </a>
              <a href="https://www.buzzsprout.com/2453285/episodes" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer">
                See More
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
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <p class="text-gray-700 italic text-sm leading-relaxed">
              <span v-if="!expanded[0]">
                "I came to the coaching session somewhat worried but open to find a solution to my rampant anxiety. I had been struggling with fears and worries to the point it was taking a physical toll on my body...
              </span>
              <span v-else>
                "I came to the coaching session somewhat worried but open to find a solution to my rampant anxiety. I had been struggling with fears and worries to the point it was taking a physical toll on my body and was concerned that it was starting to affect my loved ones as well.

When I started the coaching session on zoom, my worries were immediately eased. Melanie was more than kind and showed care towards my struggles. I was not met with judgment towards the things I worried about - which I loved. I felt heard and validated. Melanie taught me tools that I could use to combat my anxiety and made me realize that my hopes and aspirations aren't as impossible as my anxiety made them to be.

I have a long way to go but I am super grateful to Melanie and her coaching. I would definitely recommend to anyone who has similar problems as me to reach out and give it a try."
              </span>
            </p>
            <button class="text-purple-600 hover:text-purple-700 text-sm font-semibold mt-2 transition-colors" @click="toggleExpand(0)">
              {{ expanded[0] ? 'Read less' : 'Read more' }}
            </button>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <p class="text-gray-700 italic text-sm leading-relaxed">
              <span v-if="!expanded[1]">
                "First of Thank you Melanie for what you do. I highly recommend Melanie. I myself used to be a bit skeptical if I'm being honest however I have melanie a chance to help me out through some personal problems...
              </span>
              <span v-else>
                "First of Thank you Melanie for what you do. I highly recommend Melanie. I myself used to be a bit skeptical if I'm being honest however I have melanie a chance to help me out through some personal problems I had been struggling with honestly all my life. I literally thought there was no hope for me and that it was just the ways things were because it was literally something I was struggling with for as long as I could remember. I was even able to find a diagnosis online for my problem. Little did I know that through her couching I would finally find freedom, and it's not temporary freedom. It truly helped, trauma is real and can definitely affect your life in so many ways. Trauma that I may not even consider to have been affecting me. Anyway moral of the story, coaching can truly help if your willing to give it a chance. Coming from a skeptical person, allow yourself to be free. We all deserve happiness 🥰 Thank you Melanie ❤️"
              </span>
            </p>
            <button class="text-purple-600 hover:text-purple-700 text-sm font-semibold mt-2 transition-colors" @click="toggleExpand(1)">
              {{ expanded[1] ? 'Read less' : 'Read more' }}
            </button>
            <div class="flex text-yellow-400 mt-4">
              <span>★★★★★</span>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <p class="text-gray-700 italic text-sm leading-relaxed">
              <span v-if="!expanded[2]">
                "Working with Melanie has been such a sweet and divine experience! She's perceptive, attentive, and intuitive, so our sessions never go to waste...
              </span>
              <span v-else>
                "Working with Melanie has been such a sweet and divine experience! She's perceptive, attentive, and intuitive, so our sessions never go to waste because she leads me exactly to the places my spirit needs to address in order to overcome my limiting beliefs. Having her in my corner has been worth the investment twice over, and I would recommend that anyone who wants to make significant changes in their life partner with her as a powerful help and guide."
              </span>
            </p>
            <button class="text-purple-600 hover:text-purple-700 text-sm font-semibold mt-2 transition-colors" @click="toggleExpand(2)">
              {{ expanded[2] ? 'Read less' : 'Read more' }}
            </button>
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
                  <div>
            <a href="https://calendly.com/melanie_mindsetcoach/30-min-free-consultation" target="_blank" rel="noopener noreferrer" class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              Schedule Now
            </a>
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
              <a href="https://www.instagram.com/m_eofficial?igsh=MWJtbW5ubGQyaDA4OQ==" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a>
              <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">TikTok</a>
              <a href="https://www.youtube.com/@truealchemycoaching" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-purple-400 transition-colors">YouTube</a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="https://calendly.com/melanie_mindsetcoach/30-min-free-consultation" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400 transition-colors">30 minute free session</a></li>
              <li><a href="https://calendly.com/melanie_mindsetcoach/30min" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400 transition-colors">2 day Alchemize</a></li>
              <li><a href="https://www.buzzsprout.com/2453285/episodes" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400 transition-colors">Podcast</a></li>
              <li><a href="mailto:truealchemycoaching@gmail.com" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 True Alchemy. All rights reserved. Made with 💜 in Tampa, FL</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref([false, false, false])

const toggleExpand = (index) => {
  expanded.value[index] = !expanded.value[index]
}
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
