const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ PostgreSQL connected successfully!');
    
    // Test a simple query
    const userCount = await prisma.user.count();
    console.log(`📊 Database contains ${userCount} users`);
    
    console.log('✅ Database connection test completed successfully!');
  } catch (error) {
    console.log('❌ Connection failed:', error.message);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
}

testConnection();
