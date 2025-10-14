'use client';

import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Contact & Investment Inquiries"
            subtitle="Get in Touch"
            description="Ready to invest in AGV Protocol? Contact our team for detailed discussions and partnership opportunities."
            className="mb-16"
          />

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Investment Inquiry Form</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="investmentType" className="block text-sm font-medium text-foreground mb-2">
                    Investment Type
                  </label>
                  <select
                    id="investmentType"
                    name="investmentType"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select investment type</option>
                    <option value="series-a">Series A</option>
                    <option value="strategic">Strategic Investment</option>
                    <option value="partnership">Partnership</option>
                    <option value="advisory">Advisory Role</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your investment interest and any specific questions..."
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="nda"
                    name="nda"
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="nda" className="ml-2 text-sm text-muted-foreground">
                    I agree to sign an NDA for confidential discussions
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-3">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">investors@agvprotocol.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-3">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-3">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Button href="/investor" variant="primary" size="lg" className="w-full">
                  Access Full Data Room
                </Button>
                <Button href="/financials" variant="outline" size="lg" className="w-full">
                  View Financial Models
                </Button>
                <Button href="/esg" variant="outline" size="lg" className="w-full">
                  ESG & Sustainability Report
                </Button>
                <Button href="/brandkit" variant="outline" size="lg" className="w-full">
                  Download Brand Kit
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* NDA Request */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4">Confidential Information Access</h2>
              <p className="text-muted-foreground mb-6">
                For access to confidential financial projections, technical specifications, and strategic plans, 
                please request an NDA to be sent to your email.
              </p>
              <Button href="mailto:legal@agvprotocol.com?subject=NDA Request" variant="primary" size="lg">
                Request NDA
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
