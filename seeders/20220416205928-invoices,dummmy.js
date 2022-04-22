'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   client: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('invoices', [
      { client: "Alaa Essam", date: "2021-6-27", status: "Paid", amount: 10000 ,city:"Alexandria",Branch:"Smouha"},
      { client: "Jon Doe", date: "2021-5-1", status: "Unpaid", amount: 2500 ,city:"Cairo",Branch:"5th Settlement"},
      { client: "Tyrion lannister", date: "2021-1-2", status: "Paid", amount: 999999 ,city:"Cairo",Branch:"5th Settlement"},
      { client: "Elizabeth Hurley", date: "2022-4-25", status: "Overdue", amount: 2525,city:"Cairo",Branch:"6 October" },
      { client: "Elon Musk", date: "2021-5-23", status: "Draft", amount: 4222 ,city:"Alexandria",Branch:"Smouha"},
      { client: "Donald Trump", date: "2021-7-2", status: "Overdue", amount: 100000000,city:"Cairo",Branch:"6 October"  },
      { client: "Elizabeth Hurley", date: "2022-1-1", status: "Overdue", amount: 2525,city:"Cairo",Branch:"6 October" },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
